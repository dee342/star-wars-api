```
npm install
```

Then, run the Application:

```
npm start
```

You can access your app at 

```
http://localhost:8000/app/
```

************************
**Objectives**

Use the Star Wars API [swapi.co](http://swapi.co) to generate a list of the films that a particular character appears in

- Allow users to choose a character from the provided JSON file
- Upon selection of a character, the UI should update to display information about **each** of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
- Do this with some kind of component-based pattern
- You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
- Don't load the movie data until the character is clicked
- Don't show any movie information until all of the character's movies have loaded
- Use css to make it pretty, styling is up to you!

**Frameworks you can use**

- Angular 1.x
- Angular 2
- React

Feel free to use any function library you'd like.

If you have feedback about the exercise, please include it.

**NOTE:** Obi-wan's URL is intentionally incorrect, please do not modify the JSON.

----

`characters.json`:

    {
      "characters": [{
        "name": "Luke Skywalker",
        "url": "https://swapi.co/api/people/1/"
      }, {
        "name": "Darth Vader",
        "url": "https://swapi.co/api/people/4/"
      }, {
        "name": "Obi-wan Kenobi",
        "url": "https://swapi.co/api/people/unknown/"
      }, {
        "name": "R2-D2",
        "url": "https://swapi.co/api/people/2/"
      }]
    }

