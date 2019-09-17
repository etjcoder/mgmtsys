module.exports = function (sequelize, DataTypes) {
    var Supervisor = sequelize.define("Supervisor", {
        supervisor_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        }, 
        specialties: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jobs_expenses: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        jobs_revenue: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        } ,
        jobs_profits: {
            type: DataTypes.INTEGER,
            defaultValue: 0
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
    return Supervisor;
}