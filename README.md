# PokeDex
a pokemon application to find your favorite Pokemon!

ANGULAR NOTES:
load with 'ng serve'

to make a new component use 'ng generate component 'name''

index.html is the root, but it loads the actual home, with the <app-root> call on line 13

server.ts handles custom endpoints, not used yet

main.ts bootstraps our app

app.routes.ts is where we make new routes for page nav

app.component.ts is what gets loaded with index.html line 13

making a new component creates a folder with html css and ts files. 

COMPONENTS:
- home
- starter
- whereami (practice for location services)
- login/signup
- starters (practice hitting open APIs)
- wordle (recreated wordle with pokemon theme)
- gym leaders (ngIf practice, parsing more api data)

cool stuff
- authguarding
- accessing user location services
- intertwining independent components
- server.ts quirks about angular/data transfer
