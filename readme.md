

1. On the home page (get "/"), users should see:
"99 Bottles of beer on the wall"

2. a link that says "take one down, pass it around"
this should link to /98, where the number represents the number of bottles left.

3. When a number is given in the url (get "/:number_of_bottles"), users should see:
The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)

4. a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
If there are 0 bottles left, do not show a link to "take one down"

5. Add a link to start over, which directs the user back to the home page.



Hints
- You should use an anchortag with an hrefto link to the next 'page'