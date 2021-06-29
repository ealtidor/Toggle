#  Toggle

> The purpose of this web application is to provide real estate investors a quick and easy way to manage their properties. Investors typically spend about 10% or more of their earnings with property managers to avoid spending time managing multiple listings and tenants. Toggle provides users the ability to store all of their properties and tenants in one central location that can be accessed anywhere at anytime. Users can manage multiple listings, maintain tenant profiles, and keep track of scheduled maintenance all in one application. Using Toggle will save investors time and money, which will provide them the ability to continue to scale their business.

## MVP
- Users can create an account
- Users can view property listings and tenants
- Track scheduled maintenance and leasing agreements
- Users can edit property listings and tenant profiles  


## POST-MVP
- Tenants can contact landlors for things such as, service request, general questions, and/or concerns landlord by completing forms  
- Landlords can respond to tenant requests through the app
- Landlords can keep track of monthly payments and expenses
- Property reminders for things such as maintenance, lease agreement, and rental vacancies.
- Users can send out property annoucnements to tenants

### Goals

- Seamless user experience on desktop and mobile
- User is able to create an account
- Full CRUD capbability

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React js       | Creates interactive UIs; Front-End |
|   React Router   | Uses component structure to call components, which display the appropriate information; Front-End |
|     Ruby      | A dynamic, open source programming language with a focus on simplicity and productivity; Back-End |
| Ruby on Rails  | Server-side web application framework; Back-End |

<br>

### Client (Front End)

#### Wireframes

[Toggle Wireframe](https://www.figma.com/file/LkMoG9HFDxFZX4EB8KOpSx/Toggle?node-id=0%3A1)

![image](https://user-images.githubusercontent.com/80142574/122847567-f417ce80-d2d5-11eb-9822-5e2cf136e79d.png)

![image](https://user-images.githubusercontent.com/80142574/122847928-91730280-d2d6-11eb-8735-f41e4432fcb9.png)

![image](https://user-images.githubusercontent.com/80142574/122848360-60df9880-d2d7-11eb-8d8e-6c2826685fc4.png)

![image](https://user-images.githubusercontent.com/80142574/122848057-d008bd00-d2d6-11eb-9ef4-f16309de78c2.png)


#### Component Tree

[Component Tree ](https://whimsical.com/toggle-ByvfYjMNNUJgwszi4bcc2W)

![image](https://user-images.githubusercontent.com/80142574/122850281-f4669880-d2da-11eb-864d-b0181e252eb9.png)


#### Component Architecture


#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Models    |    H     |     1 hrs      |      1hrs     |    1hrs    |
| Seed Data and Build Routes |    H     |     3 hrs      |     3hrs     |     3hrs     |
| Test Routes |    H     |     .5 hrs      |     2hrs     |     2hrs     |
| Set Up Cors |    H     |     .5 hrs      |    .5hrs     |     .5hrs     |
| Create Controller Files |    H     |     3 hrs      |     3hrs     |     3hrs     |
| Test API |    H     |     1 hrs      |     1hrs     |     1hrs     |
| Create React App and Clear Boilerplate |    H     |     2 hrs      |     .5hrs     |     .5hrs     |
| Create File Structure |    H     |     1 hr      |     1hr     |     1hr     |
| Complete Screen, Components and Connections |    H     |     10 hrs      |     12hrs     |     12hrs     |
| CSS Styling |    H     |     10 hrs      |     10 hrs      |     10 hrs      |
| Create Responsive Design |    H     |     4 hrs      |     4hrs     |     4hrs     |
| Deploy to Production |    H     |     1 hrs      |     2 hrs     |     2 hrs     |
| Review App Funcationality for Bugs |    H     |     1 hrs      |     1hr     |     1hr     |
| Presenatation Review |    H     |     2hrs      |     1hr     |     1hr     |
| TOTAL               |          |     40 hrs      |     45 hrs     |     45 hrs     |



### Server (Back End)

#### ERD Model

![image](https://user-images.githubusercontent.com/80142574/122947602-472a6980-d348-11eb-8f83-68f133f3e920.png)



## Code Showcase

> Mapped through a nested array in order to capture the tenant name associated with the property.  


```
{propertyItem?.tenants.map((tenant) => (
                  <Link
                    className="property-tenant-name"
                    to={`/tenants/${tenant.id}`}
                    key={tenant.id}
                  >
                    <p>{tenant.name}</p>
                  </Link>
                ))}
```

## Code Issues & Resolutions

> Needed to access the tenant table in my DisplayProperty screen to render the name of the tenant associated with the property that was selected. On the backend I was able to update my controller with "include: :tenant" and was able to access the tenant table as a nested array.
