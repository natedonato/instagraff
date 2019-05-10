# Instagraff

[Live Site](https://www.instagraff.herokuapp.com)

Instagraff is a social network and image sharing platform based on Instagram.  The front end components are built on React.js and Redux architecture, while PostgreSQL and Rails fill out the lower levels of the stack.  Instagraff integrates with Amazon Web Services to host uploaded images.

#User Auth
  Secure authentication uses hashing function BCrypt to manage passwords securely and prevent storing plaintext user passwords in database.  Certain pages are protected and cannot be viewed by users without sign in.  Users are allowed to remove their own photos or comments. 
  

#Photos
  Users can create photo posts by uploading images directly from their computer or phone.  Instagraff uses S3 provided by Amazon Web Services to store and host images.
  
  Photos can be displayed in a variety of ways, including a photo feed, an individual photo show page / modal, and a thumbnail view for overviewing many different photos at once.
  
![alt text](https://raw.githubusercontent.com/natedonato/instagraff/master/productionmanual/photo_show.png "Photo Show Modal")

  
  Photos feature both likes and comments.  The comments will render within in a view more menu if the number of comments would interrupt the flow of the photo feed
  
  
![alt text](https://raw.githubusercontent.com/natedonato/instagraff/master/productionmanual/comments.png "View More")

  
  
  
  
  
  
 #Responsive Design
  Instagraff resizes elements to fit different devices, and features seperate styles optimized for desktop view and mobile view.  Both mobile and desktop users can enjoy the full suite of instagraff functionality including uploading and easily viewing photos, using front end components designed with scalability in mind.

 
 
 
 

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
