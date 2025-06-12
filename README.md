# Language Learning Platform — Real Media Immersion

Learn languages through real YouTube, Netflix, news, podcasts: transcripts, interactive subtitles, SRS vocabulary, cloze & shadowing.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + Video.js (mock)
- **15 Apps:** media, transcripts, vocabulary, exercises, pronunciation, progress, recommendations, community, content, player, dictionary, assessment, gamification, integrations, frontend

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t language-platform .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Media:** YouTube/Netflix/news/podcast catalog, metadata, difficulty tagging
- **Transcripts:** ASR, alignment, subtitles with timing `00:01:23.450`
- **Vocabulary:** word bank, SRS Leitner buckets, flashcards with FSRS
- **Exercises:** cloze deletions, multiple choice, dictation, shadowing with scoring
- **Pronunciation:** phoneme scoring, speech recognition
- **Progress:** streak, XP, levels, CEFR A1-C2

## License
Proprietary — All rights reserved.
