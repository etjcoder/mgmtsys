module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acreage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        pricerange: {
            type: DataTypes.TEXT,
            allowNull: false
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
    return Customer;
}