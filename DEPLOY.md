# Quick deploy guide

## TL;DR
```bash
cd frontend
yarn install
yarn deploy
```
Then GitHub → Settings → Pages → Source: `gh-pages` branch.

## What just happened?
1. `yarn predeploy` automatically ran `yarn build` and produced `build/`.
2. `yarn deploy` pushed that `build/` folder to a `gh-pages` branch on the same repo.
3. GitHub Pages serves the static files from that branch.

## Updating content
1. Edit `src/data/mock.js` (everything: copy, services, case studies, links).
2. `git commit -am "Update content"` and push.
3. Run `yarn deploy` again.

## Custom domain
- Add `frontend/public/CNAME` containing `yourdomain.com`.
- Re-deploy. Configure DNS A/CNAME records per GitHub Pages docs.

## Repo layout assumption
This project lives in `frontend/` of the repo. If you put the React app at the **repo root** instead, you can drop the `working-directory: frontend` lines in any CI workflow and run commands from root.
