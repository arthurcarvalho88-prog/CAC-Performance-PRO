import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Target, FileText, FileBarChart, CheckCircle2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImage from "@assets/ddd08efe-f319-4193-824f-ac1073adad1e_1776770974096.JPG";
import homeScreen from "@assets/IMG_7699_1776770991969.PNG";
import acervoScreen from "@assets/IMG_7700_1776770991969.PNG";
import gunDetailScreen from "@assets/IMG_7701_1776770991969.PNG";
import habitualidadesScreen from "@assets/IMG_7702_1776770991969.PNG";
import habitualidadesForm from "@assets/IMG_7703_1776770991969.PNG";
import documentosScreen from "@assets/IMG_7704_1776770991969.PNG";
import perfilScreen from "@assets/IMG_7706_1776770991969.PNG";
import pdfReport from "@assets/IMG_7707_1776770991969.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="CAC Performance PRO Logo" className="w-12 h-12 object-cover rounded-md border border-primary/20" />
            <span className="font-display font-bold text-xl tracking-wider text-white hidden sm:block">
              CAC PERFORMANCE <span className="text-primary">PRO</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#modules" className="hover:text-primary transition-colors">Módulos</a>
            <a href="#reports" className="hover:text-primary transition-colors">Relatórios</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              Conheça o App <ChevronRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out"></div>
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-10 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border w-fit">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-silver-300">O Padrão Ouro para CACs</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Gestão Completa para <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Atiradores Esportivos</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Acervo de armas, habitualidades e documentos em um só lugar. Substitua pastas de papel pelo centro de comando definitivo. Preciso, seguro e construído para a linha de frente.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-none h-14 px-8 text-lg">
                  Conheça o App
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-white font-bold uppercase tracking-wider rounded-none h-14 px-8 text-lg">
                  Ver Recursos
                </Button>
              </div>
              
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border/50">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-display font-bold text-white">100%</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Conformidade</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-display font-bold text-white">Zero</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Papelada</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-display font-bold text-white">24/7</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Acesso Seguro</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[320px] aspect-[9/19]">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
                <div className="relative h-full w-full rounded-[2.5rem] border-4 border-muted p-2 bg-background shadow-2xl shadow-primary/10 overflow-hidden ring-1 ring-border/50">
                  <img src={homeScreen} alt="App Dashboard" className="w-full h-full object-cover rounded-[2rem]" />
                </div>
                {/* Floating Badges */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-20 -left-12 bg-secondary border border-border p-3 rounded-lg shadow-xl flex items-center gap-3"
                >
                  <Shield className="w-6 h-6 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase">Acervo</span>
                    <span className="text-[10px] text-muted-foreground">Seguro & Auditado</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-32 -right-12 bg-secondary border border-border p-3 rounded-lg shadow-xl flex items-center gap-3"
                >
                  <Target className="w-6 h-6 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase">Prontidão</span>
                    <span className="text-[10px] text-muted-foreground">Registros em Dia</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Core Modules */}
        <section id="modules" className="py-24 bg-card/50 border-y border-border/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Quatro Pilares da Gestão CAC</h2>
              <p className="text-muted-foreground text-lg">Tudo que o atirador esportivo brasileiro precisa para manter sua regularidade, organizado em quatro módulos integrados e projetados com precisão.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Acervo */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-background border border-border p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Shield className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">Acervo</h3>
                <p className="text-muted-foreground mb-6 text-sm">Controle total sobre seu armamento. Dados técnicos, registros e calibres perfeitamente organizados.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Fichas técnicas detalhadas</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> N° de série e SIGMA</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Alertas de validade</li>
                </ul>
              </motion.div>

              {/* Habitualidades */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-background border border-border p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">Habitualidades</h3>
                <p className="text-muted-foreground mb-6 text-sm">Registro ágil de idas ao clube de tiro. Comprove sua frequência exigida por lei com poucos toques.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Registro por arma/calibre</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Progresso por nível</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Exportação em PDF</li>
                </ul>
              </motion.div>

              {/* Documentos */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-background border border-border p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FileText className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">Documentos</h3>
                <p className="text-muted-foreground mb-6 text-sm">Cofre digital para CR, CRAF, Guias de Tráfego e filiações. Nunca seja pego de surpresa.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Digitalização instantânea</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Monitor de validade</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Acesso offline</li>
                </ul>
              </motion.div>

              {/* Perfil */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-background border border-border p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <User className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">Perfil</h3>
                <p className="text-muted-foreground mb-6 text-sm">Sua identidade completa de atirador. Dados pessoais, registro CAC e configurações de segurança em um só lugar.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Dados do registro CAC</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Biometria facial</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Nível e categoria</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive - Alternating Layout */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-4 space-y-32">
            
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2 lg:order-1 relative w-full max-w-[320px] mx-auto lg:mx-0 aspect-[9/19]"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[40px] rounded-full" />
                <div className="relative h-full w-full rounded-[2.5rem] border-4 border-muted p-2 bg-background shadow-2xl overflow-hidden ring-1 ring-border">
                  <img src={acervoScreen} alt="Acervo Dashboard" className="w-full h-full object-cover rounded-[2rem]" />
                </div>
                <div className="absolute -right-20 top-20 w-48 h-64 rounded-xl border border-border shadow-xl overflow-hidden hidden lg:block opacity-80 rotate-6">
                   <img src={gunDetailScreen} alt="Gun Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Inventário de Precisão</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Mantenha o registro de todo o seu arsenal na ponta dos dedos. Do calibre .22LR ao fuzil 5.56, tenha acesso imediato a todas as informações técnicas e documentais de cada armamento.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide">Fichas Completas</h4>
                      <p className="text-sm text-muted-foreground">Registre fabricante, modelo, calibre, capacidade e acabamento.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide">Vínculo Documental</h4>
                      <p className="text-sm text-muted-foreground">Associe automaticamente os CRAFs e Guias de Tráfego a cada arma.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Registro Tático em Segundos</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Chegou no clube? Registre sua habitualidade antes mesmo de sacar a arma. Uma interface projetada para velocidade e eficiência, garantindo sua conformidade legal sem burocracia.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide">Automação de Formulários</h4>
                      <p className="text-sm text-muted-foreground">Selecione arma e munição com poucos toques. Assinatura digital integrada.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide">Histórico Imutável</h4>
                      <p className="text-sm text-muted-foreground">Todas as sessões salvas cronologicamente para auditoria instantânea.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-full max-w-[320px] mx-auto lg:mx-0 lg:ml-auto aspect-[9/19]"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[40px] rounded-full" />
                <div className="relative h-full w-full rounded-[2.5rem] border-4 border-muted p-2 bg-background shadow-2xl overflow-hidden ring-1 ring-border">
                  <img src={habitualidadesScreen} alt="Habitualidades List" className="w-full h-full object-cover rounded-[2rem]" />
                </div>
                <div className="absolute -left-20 top-32 w-48 h-64 rounded-xl border border-border shadow-xl overflow-hidden hidden lg:block opacity-90 -rotate-6">
                   <img src={habitualidadesForm} alt="Habitualidades Form" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2 lg:order-1 relative w-full max-w-[320px] mx-auto lg:mx-0 aspect-[9/19]"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[40px] rounded-full" />
                <div className="relative h-full w-full rounded-[2.5rem] border-4 border-muted p-2 bg-background shadow-2xl overflow-hidden ring-1 ring-border">
                  <img src={documentosScreen} alt="Documentos List" className="w-full h-full object-cover rounded-[2rem]" />
                </div>
                 <div className="absolute -right-20 top-20 w-48 h-64 rounded-xl border border-border shadow-xl overflow-hidden hidden lg:block opacity-80 rotate-6">
                   <img src={perfilScreen} alt="Perfil Screen" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Cofre Documental</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Carregue todos os seus documentos legais no bolso de forma segura. Em caso de abordagem, tenha prontidão absoluta para apresentar CR, GTs e CRAFs atualizados e com validade monitorada.
                </p>
                <div className="space-y-6">
                   <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide">Monitor de Vencimento</h4>
                      <p className="text-sm text-muted-foreground">Sistema de cores indica o status de validade de cada documento.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide">Acesso Imediato</h4>
                      <p className="text-sm text-muted-foreground">Visualização nativa de imagens e PDFs integrados diretamente na plataforma.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </section>

        {/* Reports / PDF Export Section */}
        <section id="reports" className="py-24 bg-secondary/50 border-y border-border/50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border w-fit mb-6">
                  <FileBarChart className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-silver-300">Geração de Relatórios</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Exportação Pronta para o Exército</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Gere relatórios de habitualidade formatados exatamente como exigido pelo Comando do Exército. Exporte em PDF com um clique e apresente sua documentação impecável nas renovações e vistorias.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-silver-300">Layout padronizado (Exército Brasileiro)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-silver-300">Totalização automática por calibre</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-silver-300">Pronto para impressão ou envio digital</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    Saiba Mais
                  </span>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full" />
                <img 
                  src={pdfReport} 
                  alt="Relatório PDF do Exército Brasileiro" 
                  className="relative rounded-xl border border-border shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">Assuma o Comando.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Pare de lutar contra papeladas e planilhas desorganizadas. Eleve sua gestão esportiva ao nível profissional que o seu esporte exige.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-none h-16 px-12 text-xl shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all">
              Conheça o App Agora
            </Button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card relative z-10">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="CAC Performance PRO Logo" className="w-10 h-10 object-cover rounded border border-primary/20 grayscale opacity-80" />
            <span className="font-display font-bold text-lg tracking-wider text-muted-foreground">
              CAC PERFORMANCE <span className="text-primary/80">PRO</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 CAC Performance PRO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
