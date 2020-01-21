<<<<<<< HEAD
# Post  Edit Form
- update checkbox name
- add enctype to Form

# Post Update Route
- add upload.array()

# Post Update Method
- find the post by id
- check if there's any images fot deleition
    - assign deleteImages from req.body to its own variable
    - loop over deoleteImages
        - delete images from cloudinary
        - delete images from post.images
- check if there are any new images for upload
    - upload images
        - add images to post into the db
        - redirect to show page

# Geocoding Post Adress and Adding its Marker to the Map

## Update Posts Controller
- Add the geocodingClient to top of files:
```
let response = await geocodingClient
.fowardGeocode({
    query: req.body.post.location,
    limit:1
})
.send();
```
- Assign the response's coordinates to req.body.post.coordinates
- Save the post

# Update the Posts Show view
- Remove geojson object
- Remove foreach loop over geoson.features
- Update marker to user post instead

# Adding Flash Messages

- Update pre-route middleware to check for error or success on the session
- Update post-route error handling middleware to console.log() the redirect('back)
- Create a partial for flash messages and include it in our layouts
- Write some success messages and throw some errors to test it out
=======
# surf-shop
I'm doig this amazing course about Node made by Ian form Udemy
[Coding width node by Ian Schoonover](https://www.udemy.com/course/code-with-node/)
[Also check the Ian Web he offer this course for free!!](https://www.devsprout.io/)
>>>>>>> dea0a85acdb51ed9925371bf38101a4fb5eb5906
