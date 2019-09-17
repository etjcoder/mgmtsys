module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        supervisor_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        jobsite_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        project_name: {
            type: DataTypes.STRING,
            defaultValue: 0
        },
        project_bid: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }, 
        hours: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        workers: {
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
        materialcosts: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wagecosts: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        profit: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        jobcomments: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    });
    return Job;
}