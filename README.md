# has

## CLI to check if apt/snap package is installed

### Installation

#### Linux

1 - clone this repo inside a folder of your preference:

```
git clone https://github.com/ruben-acevedo/has.git
```

2 - navigate inside your terminal into the project folder using cd

3 - authorize the installation:

```
chmod +x install.sh
```

4 - run the installer:

```
./install.sh
```

5 - restart your terminal

this will create an alias inside your ~/.bashrc
if you want to uninstall, just go to end of file of your .bashrc
and delete the line alias has = your_path.../index.js

### Usage

type "has + package(s)" you want to check

##### example:

```
has node git flatpak gedit google-chrome firefox
```

##### response:

```
✕ flatpak
✓ git
✓ node
✓ gedit
✓ google-chrome
✓ firefox
```

i do not have flatpak package installed on my machine...

### Contribute

Fell free to pull request :)

### Contact

rubenfsolorzano@hotmail.com

See ya! :)
