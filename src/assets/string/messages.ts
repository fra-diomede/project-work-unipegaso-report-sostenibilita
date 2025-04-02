export const messageConfig = {
    COD_DOC: '{cod-doc}',
    RUOLO: '{currentRole}',
    USER_ID: '{userId}'
}

export const feedbackMessages = {
    success: {
        genericSuccess: 'Operazione conclusa con successo.',
        ricercaConfigurazioniByIdEBandoRiuscita: 'Configurazioni trovate con successo.',
        eliminazioneConfigurazioneRiuscita: 'Configurazione eliminata con successo.',
        aggiornamentoConfigurazioneRiuscita: 'Aggiornamento configurazione conclusa con successo.',
        aggiuntaNuovaConfigurazioneRiuscita: 'Nuova configurazione salvata con successo.',
        aggiornamentoBandoRiuscita: 'Aggiornamento bando conclusa con successo.',
        aggiuntaNuovoBandoRiuscita: 'Nuovo bando aggiunto con successo.',
        aggiuntaNuovaEsecuzioneRiuscita: 'Nuova esecuzione avviata con successo.',
        annullamentoSqualificaDomandaRiuscita: 'Squalifica domanda annullata con successo.',
        confermaGraduatoria: 'Graduatoria confermata con successo.',
        pubblicazioneGraduatoria: 'Graduatoria pubblicata con successo.',
        copiaDati: 'Copia dati avvenuta con successo'
    },
    error: {
        systemError: 'ERRORE NEL SERVER: contattare l\'assistenza o riprovare più tardi.',
        authError: 'Errore di autenticazione.',
        serviceUnavailable: 'Servizio momentaneamente non disponibile.',
        ricercaConfigurazioniByIdEBandoFallita: 'Ricerca configurazioni fallita.',
        eliminazioneConfigurazioneFallita: 'Cancellazione configurazione fallita.',
        aggiornamentoConfigurazioneFallita: 'Aggiornamento configurazione fallita.',
        aggiuntaNuovaConfigurazioneFallita: 'Salvataggio nuova configurazione fallita.',
        aggiornamentoBandoFallita: 'Aggiornamento bando fallita.',
        aggiuntaNuovoBandoFallita: 'Salvataggio nuovo bando fallita.',
        ricercaEsecuzioniFallita: 'Ricerca esecuzioni fallita.',
        aggiuntaNuovaEsecuzioneFallita: 'Aggiunta di una nuova esecuzione fallita.',
        downloadGraduatoriaFallita: 'Errore nel download della graduatoria.',
        ricercaGraduatoriaFallita: 'Errore nella ricerca della graduatoria.',
        annullamentoSqualificaDomandaFallita: 'Errore annullamento squalifica.',
        confermaGraduatoria: 'Conferma graduatoria fallita.',
        pubblicazioneGraduatoria: 'Pubblicazione graduatoria fallita.',
        copiaDati: 'Errore durante la copia dei dati',
        downloadDocumento:'Errore durante il download del documento: il documento ' + messageConfig.COD_DOC + ' non è stato trovato per il bando attivo.',
        downloadManualeUtente: 'Errore durante il download del manuale utente.',
    }
}

export const modalMessages = {
    title: {
        confermaGrad: 'Conferma esecuzione',
        pubblicaGrad: 'Pubblica elenchi',
        eliminaBando: 'Elimina configurazione',
        annullaEsecuzione: 'Annulla esecuzione',
        nuovoTestoMail: 'Nuovo testo mail',
        modificaTestoMail: 'Modifica testo mail'
    },
    message: {
        confermaGrad: `Sicuro di voler confermare l\'esecuzione? 
            Confermando non sarà più possibile eseguire l\'operazione `,
        pubblicaGrad: `Sicuro di voler pubblicare gli elenchi? 
            Procedendo gli esiti saranno definitivi e non sarà più possibile eseguire l\'operazione `,
        eliminaBando: 'Sei sicuro di voler confermare l\'eliminazione della configurazione?',
        annullaEsecuzione: `Sicuro di voler annullare questa esecuzione? 
            Procedendo con l\'annullamento saranno ripristinati gli stati precedenti.`,
        nuovoTestoMail: 'Nuovo oggetto testo mail per il bando selezionato.',
        modificaTestoMail: 'Modifica oggetto testo mail selezionato.',
    }
}

export const infoMessage = {
    warningQueryPec: 'Attenzione: la colonna per identificare la domanda è COD_DOM_ISI, non aggiungere il ; finale',
    downloadManualeUtente: 'Scarica il manuale utente',
    homeWelcomeMessage: 'Benvenuto in ISI Console ' + messageConfig.USER_ID,
    homeLeadMessage: 'Il tuo ruolo applicativo è <b>' + messageConfig.RUOLO + '</b>.',
    homeInfoMessage: 'In caso di supporto o difficoltà, è possibile consultare il manuale utente.'
}

export const descriptionsWizardBando = { 
    descrizioneBando: `Prima fase di configurazione, qui deve essere configurato il <b>Bando</b> inserendo <b>l'importo totale</b> e <b>le date</b> delle diverse fasi del bando.`,
    descrizioneAssiSottoassi: `In questa fase vengono configurati gli assi e sottoassi relativi al <b>Bando ISI</b> precendentemente definito. Per ogni <b>asse</b> va indicata una <b>descrizione in formato HTML</b> che corrisponde a quanto scritto nella documentazione ISI.
    Defiti gli assi, il bando prevedere anche la scomposizione di quest'ultimi in sottoassi. Per inserire un nuovo <b>sottoasse</b> va selezionato <b>l'asse</b>, va poi inserita la <b>descrizione</b> del sottoasse ed il <b>codice</b>.`,
    descrizioneBandoRegionale: `Qui vanno definiti i budget regionali, dai documenti del Bando ISI vanno recuperati i <b>budget</b> e la <b>percentuale(%)</b> di finanziamento per <b>regione</b>. 
    L'<b>importo impiegato</b> ed <b>erogato</b> vengono automaticamente prevalorizzate a <b>0 €</b>, queste saranno poi utilizzate e valorizzate durante il processo di creazione della graduatoria.`,
    descrizioneDettBandoRegionale: `Ripartito il budget totale per ogni regione qui va ulteriormente suddiviso per singolo asse per ogni regione definendo l'<b>importo</b> e la <b>percentuale(%)</b> finanziabile. 
    Anche qui l'<b>importo impiegato</b>, <b>erogato</b> e <b>residuo</b> vengono automaticamente prevalorizzate a <b>0 €</b> e poi utilizzate e valorizzate durante il processo di creazione della graduatoria.`,  
    descrizioneGriglia: `Qui vengono definite le griglie per ogni singolo sottoasse. Da qui inizia la gerarchia che va poi a comporre la griglia del progetto.
    Per ogni griglia va definito il <b>valore soglia</b>, ossia il punteggio minimo da raggiungere per il progetto che si vuole presentare.`,
    descrizioneParamGriglia: `Questo è il primo step di configurazione dei parametri griglia.
    Per ogni sottoasse vanno inseriti i parametri griglia ad esso associato selezionando una <b>descrizione</b>, la <b>posizione</b> di questo e la <b>tipologia di verifica</b> ed opzionalmente la <b>tipologia di parametro</b> e il <b>flag di controllo</b>.`,
    descrizioneValParGri: `In questa fase viene configurata la griglia del progetto, che corrisponde all'ultimo step di registrazione della domanda ISI.
    Per ogni parametro griglia vanno inseriti i valori parametro a esso associato, per i quali va inserita una <b>descrizione</b>, le <b>regioni</b> e il <b>punteggio</b> ed eventuali <b>valori di controllo</b>, <b>tipologia di intervento</b> e <b>polizza</b>.`,
    descrizioneTipoAzienda: `In questa fase vanno configurate le <b>tipologie di azienda</b> con il <b>tipo registro impresa</b>.`,
    descrizionePuntAteco: `In questa tabella vanno configurati per ogni <b>regione</b> e per ogni <b>sottoasse</b> indicati nel bando il <b>punteggio ATECO aggiuntivo</b> indicando per quale <b>codice</b> questo vale.`,
    descrizioneAsseAteco: `Per poter avere la possibilità di ammettere solo dei codici ATECO specifici, è stata introdotta questo step di configurazione, dove per ogni asse è possibile specificare quale codice ATECO è ammesso, per fare ciò va selezionato il <b>macrosettore</b> e successivamente il <b>codice ATECO</b> in oggetto.`,
    descrizioneImportoFinanziabile: `In questa fase vanno indicati gli <b>importi minimi e massimi finanziabili</b> per <b>sottoasse</b>, questi sono identificati da un <b>codice</b> che va selezionato oltre ad indicare il <b>valore</b> di questo`,
    descrizioneDeMinimis: `Qui vengono infine selezionati i <b>regolamenti De Minimis</b> associati al bando che si sta configurando.`,
    descrizioneMacrosettore: `In questa fase di configurazione vanno raggruppati i codici ATECO per macrosettore, questi sono specificati sempre nella documentazione del bando.`,
    descrizioneValParametrico: `Terminato il raggruppamento degli ATECO in macrosettori come indicato nel bando, per ognuno di questi vanno configurate le fasce relative al <b>numero dipendenti</b> dell’azienda e relativo <b>punteggio</b>.`,
}

export const buttonLabels = {
    downloadZipXls: 'Download archivio xls',
    downloadZipPdf: 'Download archivio pdf',
}