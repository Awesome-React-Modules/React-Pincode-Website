Welcome to <b>React Pincode</b> Project. This file demonstrates the contributing guidelines that every developer/mentor has to adhere for GirlScript Summer of Code'20. This is required in order to create a unified development environment. Let's start.

## The Git Workflow
The workflow that we'll be using is <b> Dev - Staging - Production</b>. All the Pull Request (PR's) will be made to <b>develop</b> branch.
The mentors shall review the PR. If any change is required in the PR, the mentors shall comment on the PR itself else if
everything is good, the mentors will merge the PR to the develop branch.<br />
To read more about this workflow, you can visit [this link](http://guides.beanstalkapp.com/deployments/best-practices.html).

## Fork
<b>It is strictly for the participants. Please read it carefully.</b><br />
Every participant(s) is required to fork this repository and make changes on the forked repository on a new branch other than *develop* and after making all the changes, make a Pull Request to <b>devlop branch</b>.

- After you have the project working on your local machine (refer [README.md](https://github.com/Awesome-React-Modules/React-Pincode-Website/blob/master/README.md)), in order to make sure you keep your fork up to date by tracking the original "upstream" repo that you forked. To do this, you'll need to add a remote:
    ```
    # Add 'upstream' repo to list of remotes
    $ git remote add upstream https://github.com/Awesome-React-Modules/React-Pincode-Website

    # Verify the new remote named 'upstream'
    $ git remote -v
    ```
- Whenever you want to update your fork with the latest upstream changes, take pull from the upstream repo to your fork in order to keep it at par with the main project by:
    ```
    $ git pull upstream develop
    ```
- Before making any contribution. Create seperate branch using command:
    ```
    # It will create a new branch with name Branch_Name and switch to that branch 
    $ git checkout -b Branch_Name
    ```
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:
    ```
    # To add all new files to branch Branch_Name
    $ git add .
    ```
- Commit messages should follow a [certain guideline](https://udacity.github.io/git-styleguide/).To commit give a descriptive message for the convenience of reveiwer by:
    ```
    # This message get associated with all files you have changed
    $ git commit -m 'message'
    ```
    **NOTE**: A PR should have only one commit. Multiple commits should be squashed.
- Now you are ready to your work to the remote repository
    ```
    # To push your work to your remote repository
    $ git push -u origin Branch_Name
    ```

Go to your repository in browser and click on compare and pull requests. 
