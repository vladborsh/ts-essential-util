# Get Absolute URL

Getting an absolute URL from a variable string isn't as easy as you think.  There's the URL constructor but it can act up if you don't provide the required arguments (which sometimes you can't).  Here's a trick for getting an absolute URL from and string input

The "burn" element ```href``` handles and URL nonsense for you, providing a reliable absolute URL in return.