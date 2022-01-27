# Borahae Playlists
**Made by Khadijat Oyeleye**

This is a full stack playlist application made using React, Java and MySQL.

This project was created in weeks 11-12 of the _nology course. The aim was to apply the skills we had gained throughout the course to our first full stack project.

## Project Description
### Overview
Due to my love of the group BTS, I decided to create an application where users could access a database of 133 of their songs, which I created manually using MySQL, and create playlists.

### Creating Playlists
This is a form with fields for the author's name, the title of their playlist, the playlist image URL, the playlist description and the songs, which were fetched with their title from the database. After filling in these fields and pressing the 'Create Playlist' button, a POST request is submitted to the API. All fields are in string form, with the song IDs also converted into strings, in order to match the format created in the constructor in Spring Boot. 

### Viewing Playlists
All the playlist fields which have been passed as props to the playlist component are displayed on the view page. The song ids are converted back into numbers, and the selected songs for each playlist have their image and title displayed when the "Show Songs" button is pressed, and are hidden when "Hide Songs" is pressed. Deleting the playlist deletes it by its ID, removing it from the database.

## Summary
This project required the creation of two entities in Spring Boot, and the expectation for this project was that we'd be dealing with one, so I really challenged myself through it because it took me some time to wrap my head around how I'd be connecting my two entities together, and the code I needed to write to make that happen. I'm really happy with what I achieved, as I managed to successfully display the songs in the playlist when viewed, which was something I really struggled with. I also managed to design my application in a way that superseded what I envisioned for it before I started.

## Trivia
"Borahae" is the term coined by BTS member V during a concert in 2016, for BTS and their fans. "Bora" means purple, hence the overall purple theme of my design, and "hae" comes from "saranghae", meaning "I love you".