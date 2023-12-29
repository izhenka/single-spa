# Microfrontends with single-spa

1. No common state mamangement, each app has its own state management. Apps should be able to run independently.
2. `create-single-spa` is a CLI tool to bootstrap a single-spa application. It doesn't seem to be stable yet.
   * Vue application won't run in vue v.3. Fixed that, but got another problem when importing utils from storage project, 
   * React versions are old.
   * Use vite-single-spa?