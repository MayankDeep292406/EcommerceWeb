// src/seller/utils/calculateRevenue.js

/* ==========================================
   CALCULATE TOTAL REVENUE
========================================== */

export const calculateRevenue = (
  orders = []
) => {
  return orders.reduce(
    (total, order) => {
      // ONLY COUNT PAID / DELIVERED ORDERS

      if (
        order.paymentStatus ===
          "Paid" ||
        order.status ===
          "Delivered"
      ) {
        return (
          total +
          Number(
            order.totalPrice || 0
          )
        );
      }

      return total;
    },
    0
  );
};

/* ==========================================
   CALCULATE MONTHLY REVENUE
========================================== */

export const calculateMonthlyRevenue =
  (
    orders = [],
    month,
    year
  ) => {
    return orders.reduce(
      (total, order) => {
        const orderDate =
          new Date(
            order.createdAt
          );

        const orderMonth =
          orderDate.getMonth();

        const orderYear =
          orderDate.getFullYear();

        if (
          orderMonth === month &&
          orderYear === year &&
          (order.paymentStatus ===
            "Paid" ||
            order.status ===
              "Delivered")
        ) {
          return (
            total +
            Number(
              order.totalPrice ||
                0
            )
          );
        }

        return total;
      },
      0
    );
  };

/* ==========================================
   CALCULATE TODAY REVENUE
========================================== */

export const calculateTodayRevenue =
  (orders = []) => {
    const today =
      new Date();

    return orders.reduce(
      (total, order) => {
        const orderDate =
          new Date(
            order.createdAt
          );

        const isToday =
          orderDate.getDate() ===
            today.getDate() &&
          orderDate.getMonth() ===
            today.getMonth() &&
          orderDate.getFullYear() ===
            today.getFullYear();

        if (
          isToday &&
          (order.paymentStatus ===
            "Paid" ||
            order.status ===
              "Delivered")
        ) {
          return (
            total +
            Number(
              order.totalPrice ||
                0
            )
          );
        }

        return total;
      },
      0
    );
  };

/* ==========================================
   CALCULATE PENDING REVENUE
========================================== */

export const calculatePendingRevenue =
  (orders = []) => {
    return orders.reduce(
      (total, order) => {
        if (
          order.paymentStatus ===
          "Pending"
        ) {
          return (
            total +
            Number(
              order.totalPrice ||
                0
            )
          );
        }

        return total;
      },
      0
    );
  };

/* ==========================================
   CALCULATE TOTAL SALES
========================================== */

export const calculateTotalSales =
  (orders = []) => {
    return orders.reduce(
      (total, order) => {
        return (
          total +
          Number(
            order.quantity || 1
          )
        );
      },
      0
    );
  };

/* ==========================================
   CALCULATE AVERAGE ORDER VALUE
========================================== */

export const calculateAverageOrderValue =
  (orders = []) => {
    if (
      orders.length === 0
    ) {
      return 0;
    }

    const revenue =
      calculateRevenue(
        orders
      );

    return (
      revenue / orders.length
    ).toFixed(2);
  };

/* ==========================================
   GET BEST SELLING PRODUCTS
========================================== */

export const getBestSellingProducts =
  (
    orders = [],
    limit = 5
  ) => {
    const productMap = {};

    orders.forEach(
      (order) => {
        if (
          order.products &&
          Array.isArray(
            order.products
          )
        ) {
          order.products.forEach(
            (product) => {
              const name =
                product.name;

              if (
                !productMap[
                  name
                ]
              ) {
                productMap[
                  name
                ] = {
                  name,
                  totalSold: 0,
                  revenue: 0,
                };
              }

              productMap[
                name
              ].totalSold +=
                Number(
                  product.quantity ||
                    1
                );

              productMap[
                name
              ].revenue +=
                Number(
                  product.price || 0
                ) *
                Number(
                  product.quantity ||
                    1
                );
            }
          );
        }
      }
    );

    return Object.values(
      productMap
    )
      .sort(
        (a, b) =>
          b.totalSold -
          a.totalSold
      )
      .slice(0, limit);
  };

/* ==========================================
   CALCULATE REVENUE GROWTH %
========================================== */

export const calculateRevenueGrowth =
  (
    currentRevenue,
    previousRevenue
  ) => {
    if (
      previousRevenue === 0
    ) {
      return 100;
    }

    return (
      ((currentRevenue -
        previousRevenue) /
        previousRevenue) *
      100
    ).toFixed(1);
  };

/* ==========================================
   FORMAT CURRENCY
========================================== */

export const formatCurrency =
  (amount = 0) => {
    return new Intl.NumberFormat(
      "en-IN",
      {
        style:
          "currency",

        currency: "INR",

        maximumFractionDigits: 0,
      }
    ).format(amount);
  };