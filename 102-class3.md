# CLASS 3 READING NOTES

## VERSION CONTROL

Version Control is a system that allows you to revisit various versions of a file or set of files by recording changes

### Local Version Control LVC

 A Local VCS entails one database on your hard disk that stores changes to files.

### Centralized Version Control OR Centralized Version Control SYSTEM CVCS

This system entails a single server storing all changes and file versions, which can be accessed by various clients.

This streamlined the collaboration process by eliminating the need to involve all local databases.

### Distributed Version Control OR Distributed Version Control SYSTEMS DVCS

A Distributed Version Control systems DVCS addresses the major vulnerability of the CVS: the server as a single point of failure.

If a CVS goes down, collaborators cannot work with each other on a file or save changes and new versions

### So, what is Git?

**Snapshots**

Git is a DVCS that stores data in a file system made up of snapshots.

Each time you save a changed version of your project — called commit — Git creates a snapshot of the file and stores a reference to it.

If the file has not changed, Git only stores a reference to the already-stored identical version of it.

**Local Operations**

Git mostly relies on local operations because most necessary information can be found in local resources.

This allows for process expediency because a project’s history resides on the local disk,

eliminating the need to fetch history information from the server,

and allowing one to continue work on a project even when not online or on a VPN.

**Tracking Changes**

Every single change applied to any file or directory is tracked by Git.

And, as the gatekeeper, Git will always detect file corruption or loss of information in transit.

**Loss of Data**

Git is set up to greatly minimize the possibility of irreversible damage to files, such as accidentally lost data.

Git makes it extremely difficult for a snapshot of your file that is committed to be lost.

**States**

Files in Git can reside in three main states: committed, modified and staged.**

## Setting up a Git Repository

### Importing

To import an existing project or directory into Git, follow these steps using the Terminal or Command Line:

1. Switch to the target project’s directory

Example:

`$ cd test (cd = change directory)`

2. Use the git init commanD

`$ git init`

### Cloning

You can also create a copy of an existing Git repository from a particular server by using the clone command with a repository’s URL

## Workflow

### Local Repository Structure

The local Git repository has three components:

Working Directory: The actual files reside here.

Index: The area used for staging

Head: Points to the most recent commit

![visual representation of workflow](https://blog.udemy.com/wp-content/uploads/2015/08/image036.png)

### Saving Changes

All files in a checked out or working copy of a project file are either in a tracked or untracked state.

**Tracked**

Tracked files can be modified, unmodified, or staged; they were part of the most recent file snapshot.

**Untracked**

Untracked files were not in the last snapshot and do not currently reside in the staging area.

*After cloning a repository, files have tracked status and are unmodified because they have been checked out but not edited.

### The Life Cycle of File Status

*After you edit a file, Git flags it as modified because of changes made after the previous commit.

*You stage the modified file.

*Then, you commit staged changes.

![VISUAL OF LIFE CYCLE](https://blog.udemy.com/wp-content/uploads/2015/08/image006.png)

### Check File Status

This information indicates which branch you’re on we will cover branches in a later section and states > working directory clean.

which means that files have tracked or modified status at the moment.
Also, no untracked files are present because Git has not listed any.

 `$ git status`

### Tracking and Staging a New File

*Single File*

`git add filename`

*All Files*

`$ git add *`

After using these commands, files are tracked and staged for committing.

### Committing a File

`$ git commit -m “made change x,y,z”`

### Committing All Changes

`$ git commit -A`

### Pushing Changes

Next, you would push changes to a remote repository. We will discuss remote repositories in more depth in the next section.

For now, we will look at a general overview of pushing changes to remotes.

`$ git push origin master`

Stashing Changes

When you are not ready to commit changes but do not want to lose them either, `git stash` is a great option.

This command temporarily removes changes and hides them, giving you a clean working directory.

When you are ready to continue working on the changes, simply use the `git stash apply` command to retrieve the hidden changes.

## Remote Repositories

In order to collaborate on Git projects, you must interact with remote repositories,

versions of a project residing online or on a network.

You can work with multiple repositories, for which you can have read/write or read-only privileges.

Teams can use remote repositories to push information to and pull data from.

### Cloned Repositories

As mentioned earlier, for cloned repositories,

Git will automatically give the name > origin to the server from which you cloned and the name

> master to your local branch.

### Seeing Your Remotes

By running the `git remote` command, you can view the short names, such as “origin,” of all specified remote handles.

By using `git remote -v`, you can view all the remote URLs next to their corresponding short names.

`$ cd example`

`$ git remote -v`

remote1 <https://github.com/remote1/example> fetch

remote1 <https://github.com/remote1/example> push

remote2 <https://github.com/remote2/example> fetch

remote2 <https://github.com/remote2/example> push

remote3 <https://github.com/remote3/example> fetch

remote3 <https://github.com/remote3/example> push
