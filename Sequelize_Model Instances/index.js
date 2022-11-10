const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

const sequelize = new Sequelize('sequelize_test', 'root', '1234', {
    dialect: 'mysql',
    freezeTableName: true
});

// Check the connection
// sequelize.authenticate().then(() => {
//     console.log("Connection Successful");
// }).catch((err) => {
//     console.log("Error Connecting to database!");
// });
// console.log("Another Task.");

// Delete a table
// sequelize.drop({ match: /_test$/I});

// Models (Tables in sequelize)
const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {

        }
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21
    },
    WittCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
{
    freezeTableName: true, // Diable the modification of table name
    timestamps: false
});

// Create the table with sync
// Users.sync({ alter: true }).then((data) => {
//     console.log("Table and model synced successfully!");
// }).catch((err) => {
//     console.log("Error syncing the table and model!")
// });

User.sync({ alter: true }).then(() => {
    // Working with our updated table

    // Inserting data with build()
    // const user = User.build({ username: 'Laiba Saeed', password: '124', age: 22, WittCodeRocks: true });
    // return user.save(); 

    // Insert data with create()
    return User.bulkCreate([{
        username: 'Mohaib Ali',
        password: 'subscribe',
        age: '19',
        WittCodeRocks: false
    },
    {
        username: 'Mushaf Ali',
        password: '1245',
        age: '17',
        WittCodeRocks: false
    }
],
{ validate: true });
}).then((data) => {
    data.forEach((element) => {
        console.log(element.toJSON());
    });

    // data.decrement({ age: 2 });

    // console.log(data.toJSON());
    // console.log("User added to database!");
    // data.username = 'pizza';

    // Save updated data
    // return data.save();

    // Delete data
    // return data.destroy();

})
.catch((err) => {
    console.log(err);
});