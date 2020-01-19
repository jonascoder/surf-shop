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
