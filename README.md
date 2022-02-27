# Classroom-to-Sheets - Integrate classroom details on Google Sheets ✅

## 💡Inspiration
* 📚 Since the start of the Pandemic, Google Sheets have been the GoTo place for us students to maintain class schedules. Generally, the sheet is prepared by the Class Representative and then shared to the class.

* 🎓 Still, we need to add upcomming assignments and certain class details manually.

***

## ⚙️ What it does?
Classroom-to-Sheets is a google script that connects the Google Sheet with the corresponding Google Classroom account and integrates assignments and class details.

### Features: 

* 👩‍🏫 **Get Class Details**: It returns the classroom details along with the Class Teachers' details.
![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/56017960/155875081-7d810728-17f2-46ae-af2c-4c14377931a6.gif)


* 🔍 **Insert Assignments**: You can also insert assignments posted on the classroom in the sheet.
![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/56017960/155875187-7eaafa4a-0e15-4f9f-9fe5-bbbec776d116.gif)


***
## How we built it 👩‍💻

It is built using **Google App Scripts**
Utilizing the **Google Classroom API** and **Google Spreadsheet API**
***

## Setting Up the Project

* Create a New Google Sheet
* In the Extensions Menu -> Select App Scripts
 ![image](https://user-images.githubusercontent.com/56017960/155875292-14b2f340-4efb-4c1d-a30e-721b4cfe41d2.png)
* App Scripts connected to the sheet will open up. Clear all the prewritten code and insert the following [code](https://github.com/savi-1311/classroom-to-sheets/blob/master/code.gs) into it.
* Click on Services on the left pane to add the Google Classroom API service.
 ![image](https://user-images.githubusercontent.com/56017960/155875549-95c7b947-300c-4923-bbf9-afbe1706bb4d.png)
* Save the script by clicking on Ctrl+S.
* Reload the Google Sheets. You will now find a new Custom Menu. If not, try to open the script once again.
 ![image](https://user-images.githubusercontent.com/56017960/155875441-211cb34e-d09d-40a2-abcf-476b5b045e8b.png)
* Run a task. For the first time, you will be asked for authorization. Provide all of them.
* All the Details will be displayed with a single click!

## Challenges I ran into 🙁

❗️Getting Started with Google App Scripts: I came accrossing this amazing platform by Google recently and I found very less projects already made using it. So, it was tough to "*stackoverflow*" the doubts and I had to understand everything using the documentation. (Which is more than enough btw!)

❗️Providing Authorization: For a long time, the script was running on debugger but not on sheets. Lately, I found that authorization dosen't work with Custom Formulas, but with Custom Menu only. So I switched the complete code to Custom Menus.

***

## Accomplishments that I'm proud of 😇

* I learnt a new tech this weekend and I'll definately use the product myself!

***

## What I learned 🤔

* **Google App Scripts**: I have understood the concepts and after creating this little product, I'm looking forward to create more complex scripts using it.

***

## What's next for Classroom-to-Sheets - Integrate classroom details on Google Sheets ✅

A lot of things can be done with this project.
* Formatting of the rows inserted.
* Inserting at the desired location.

***
