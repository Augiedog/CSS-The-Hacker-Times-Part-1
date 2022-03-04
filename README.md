# CSS-The-Hacker-Times-Part-1
Hacker Times Newspaper - CSS Practice


CSS & CSS Frameworks | Simple Styling
CSS Newspaper Activity
Activity: The Hacker Times Part I
Imagine you are a web developer at The Hacker Times, a newspaper dedicated to tech news. The editor-in-chief tasks you to create the online newspaper based on the design below.

Utilize all the basic CSS concepts you have learned thus far to recreate the given mockup to the best of your ability.

Now that you know how to work with your local text editor and utilize the browser developer tools, this activity will be performed locally instead of in Replit.

Note: You will have more time to work on this activity later. While there is a suggested stopping point, do not worry if you don't reach it. Just get as much done as you can.
Setup
Instructions:
Click HERE for the link to the repo.
Fork (not clone) it to your OWN GitHub account.
Now to clone the repo to your machine, click the green 'Code' button and then copy the URL.
In a new terminal, or Git Bash, go to where you want to clone the repo.
Type "git clone" in the terminal or Git Bash, then a space, then paste the URL you copied from your repo. Example:

Click here to copy
Hit "Enter" or "Return" whichever is on your keyboard.
Do the assignment in Visual Studio Code and stage your changes using git add -A command.
Make at least one commit by using git commit -m "write your message here" command. Example:

Click here to copy
Finally push your changes using the git push command. Example:

Click here to copy
Open the index.html in your browser.
The Hacker Times
Below is the final look you are attempting to achieve:


Getting Started
Upon opening the repository in your code editor, you will see starter code in the index.html file. If you do not want to use the starter code, erase everything within the body tag and write your own HTML from scratch.

If you intend to use the provided starter code, read through the file to understand how the HTML is structured before you jump into styling.

Be sure to link the style.css file to the index.html file.

Resources
To help you achieve the same overall look, the resources used are listed below:


Fonts
The import at the top of the style.css file includes all the fonts needed for this activity.

Body font: Source Sans Pro
Header font: Abril Fatface
Article title font: Roboto Slab

Images
All the images needed can be found in the assets folder.


Colors
Body background and all borders: #eee
Newspaper background: white
Newspaper box-shadow: #ddd
Front-page article text: #dd3232
Navigation links: #777
All other text (headers, body, etc.): default (black)

Filler Text
The filler text is an alternative of the original Lorem ipsum called Cupcake ipsum. Feel free to use the regular Lorem ipsum or find other fun ipsum generators.

Styling Guidance
To attempt to style the page without any help, ignore the following tips. If you would like some help to get started, continue reading below.


Newspaper Container
All the newspaper content should be held within a container that has a width of 700px.
The newspaper container should have rounded edges using border-radius.
It should also have a box-shadow.
Don't forget to give it some padding.

Header
The title is centered. Can you recall the property used to align text?

Navigation
If you are using the starter code, all the links are li elements within a ul. Do you remember how to delete bullet points?
Once you eliminate the bullet points, you will notice a lot of margin on the left side. Get rid of it!
Use display to make all the li elements inline-block with each other.
To create space between each li, consider adding some padding.
Once all the links are in place, add borders to the top and bottom of the navigation.

Front-Page Article
Have you noticed how the article text beneath the image isn't quite flush with the edges of the image? What should you add to achieve this look?

More Articles
The short articles are next to each other. Try achieving this effect using display of inline-block and manipulating the width of each article.
The articles are also centered within their container. What can you use to achieve this look? Hint: You probably used the same thing for the newspaper header.
Don't forget to add a border to the top of the container.
Deliverables
Ideally, by the end of Part 1 of this activity, you should have the page styled up to the navigation bar, as shown below:



Note: If you opted to write your own HTML instead of using the starter code, you might have not reached the navigation bar. That's OK! Again, you will have more time in an upcoming activity.
Acceptance Criteria
When opening the index.html in the browser, the main background should be a light gray color.
When opening the index.html in the browser, all newspaper content should be contained within a white container.
When opening the index.html in the browser, all text should not be the default Times New Roman font.

Before submitting, make sure you do a self review of your code, check for formatting, spelling, include comments in your code, and ensure you have a healthy commit history.

Make sure to submit your github repository link on the submission page.

Bonus
If you finish with time remaining, below are a few bonus challenges to attempt:

The editor-in-chief wants space for more articles. Try to add another section at the bottom with three articles in a row.
You can achieve this look the same way you did with the two articles, but if you are hungry for more, consider using the CSS grid instead.
Add a footer at the bottom with links to learn about the company, careers, etc. Visit other newspaper sites to see what they have in their footers.
This newspaper design was heavily inspired by The New York Times. Visit its site and try to incorporate more of its design elements into The Hacker Times.
