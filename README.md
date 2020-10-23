# Stream now playing
This project can tell your viewers what you're listening in VLC to at the moment!
## How to install
![example output](https://cdn.discordapp.com/attachments/561279910203883523/769139586873950248/2020-10-23_12-03-09.00_00_19_19.Still001.png)
 - get the .lua file out of the ``lua(do not place here)`` directory and place it in both of the directories that are listed under your OS
	 - Linux:   Current User: ~/.local/share/vlc/lua/extensions/
	        All Users: /usr/lib/vlc/lua/extensions/
	 - Windows:   Current User: %APPDATA%\vlc\lua\extensions
		        All Users: %ProgramFiles%\VideoLAN\VLC\lua\extensions\
	 - Mac OS X:   Current User: /Users/%your_name%/Library/Application Support/org.videolan.vlc/lua/extensions/
		        All Users: /Applications/VLC.app/Contents/MacOS/share/lua/extensions/
- don't forget to click the checkmark under view>now playing in texts every time you start VLC or change playlist
- Replace ``YOUR PATH TO MUSIC.TXT HERE`` in this file with your path, music.txt has to be in the same directory as the rest of the server
- place the rest of the files in the same directory as music.txt. set up your node environment here and run the server using the command ``node start index.js``
- add a browser source to OBS/Xslpit/whatever streaming software you use and link it to ``http://loacalhost:8080``
## a few notes

By default the server and webpage uses my own streaming branding, you can change this if you want. I'm guessing that if you're mad enough to use my crazy method you know at least some basic HTML and CSS.

Huge thanks to [Now playing in texts](https://addons.videolan.org/p/1172613/) for the VLC extention.

