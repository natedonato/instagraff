# Instagraff

[Live Site](https://www.instagraff.herokuapp.com)

Instagraff is a social network and image sharing platform based on Instagram.  The front end components are built on React.js and Redux architecture, while PostgreSQL and Rails fill out the lower levels of the stack.  Instagraff integrates with Amazon Web Services to host uploaded images.

#User Auth
  Secure authentication uses hashing function BCrypt to manage passwords securely and prevent storing plaintext user passwords in database.  Certain pages are protected and cannot be viewed by users without sign in.  Users are allowed to remove their own photos or comments. 
 
 Users have a profile where you can see their info and photos.  Profile page displays statistics on the users posts and follows / followers.  Users feature a changeable profile picture and editable personal info / biography displayed on their profile.  
 
![alt text](https://raw.githubusercontent.com/natedonato/instagraff/master/productionmanual/Screen%20Shot%202019-05-10%20at%2011.43.39%20AM.png "Photo Show Modal")

Users may follow and be followed by other users.  Photos posted by users you follow are displayed in your feed on the main page.

#Photos
  Users can create photo posts by uploading images directly from their computer or phone.  Instagraff uses S3 provided by Amazon Web Services to store and host images.
  
  Photos can be displayed in a variety of ways, including a photo feed, an individual photo show page / modal, and a thumbnail view for overviewing many different photos at once.
  
![alt text](https://raw.githubusercontent.com/natedonato/instagraff/master/productionmanual/photo_show.png "Photo Show Modal")

  
  Photos feature both likes and comments.  On the display page and profile page the comment and like count are displayed on hover.
  
![alt text](https://raw.githubusercontent.com/natedonato/instagraff/master/productionmanual/Untitled%202.png "Photo hover display")

  
  The comments will render within in a view more menu if the number of comments would interrupt the flow of the photo feed.  Users can 
  
  
![alt text](https://raw.githubusercontent.com/natedonato/instagraff/master/productionmanual/comments.png "View More")

  
  
  
  
  
  
 #Responsive Design
  Instagraff resizes elements to fit different devices, and features seperate styles optimized for desktop view and mobile view.  Both mobile and desktop users can enjoy the full suite of instagraff functionality including uploading and easily viewing photos, using front end components designed with scalability in mind.
