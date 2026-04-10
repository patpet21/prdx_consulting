# Nuovo Progetto

Questo è uno scheletro base per iniziare un nuovo progetto e collegarlo a una nuova repository Git.

## Struttura

- `src/main.py`: entrypoint minimale.
- `.gitignore`: file/artefatti da escludere.

## Avvio rapido

1. Entra nella cartella del progetto:
   ```bash
   cd nuovo_progetto
   ```
2. Inizializza una nuova repository Git:
   ```bash
   git init
   git add .
   git commit -m "chore: inizializza nuovo progetto"
   ```
3. Crea una repository remota (es. GitHub/GitLab) e collegala:
   ```bash
   git remote add origin <URL-DELLA-REPOSITORY>
   git branch -M main
   git push -u origin main
   ```
