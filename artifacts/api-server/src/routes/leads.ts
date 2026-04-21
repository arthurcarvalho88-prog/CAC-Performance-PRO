import { Router } from "express";
import { z } from "zod";

const leadsRouter = Router();

const LeadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().max(500).optional(),
});

const leads: Array<{ name: string; email: string; message?: string; createdAt: string }> = [];

leadsRouter.post("/leads", (req, res) => {
  const result = LeadSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Dados inválidos",
      details: result.error.flatten().fieldErrors,
    });
    return;
  }

  const { name, email, message } = result.data;

  const alreadyExists = leads.some((l) => l.email.toLowerCase() === email.toLowerCase());
  if (alreadyExists) {
    res.status(409).json({ error: "Este e-mail já está cadastrado na lista de espera." });
    return;
  }

  leads.push({ name, email, message, createdAt: new Date().toISOString() });

  res.status(201).json({ message: "Cadastro realizado com sucesso!" });
});

export default leadsRouter;
