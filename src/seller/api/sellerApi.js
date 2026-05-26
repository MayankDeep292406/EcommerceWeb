// src/seller/api/sellerApi.js

/* ==========================================
   FAKE DATABASE (LOCAL STORAGE)
========================================== */

const SELLER_KEY =
  "ecommerce_seller";

/* ==========================================
   HELPER FUNCTIONS
========================================== */

// SAVE SELLER

const saveSeller = (
  sellerData
) => {
  localStorage.setItem(
    SELLER_KEY,
    JSON.stringify(sellerData)
  );
};

// GET SELLER

const getSeller = () => {
  const seller =
    localStorage.getItem(
      SELLER_KEY
    );

  return seller
    ? JSON.parse(seller)
    : null;
};

// REMOVE SELLER

const removeSeller = () => {
  localStorage.removeItem(
    SELLER_KEY
  );
};

/* ==========================================
   SELLER REGISTER
========================================== */

export const sellerRegister =
  async (sellerData) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          try {
            const existingSeller =
              getSeller();

            // CHECK IF ALREADY EXISTS

            if (
              existingSeller &&
              existingSeller.email ===
                sellerData.email
            ) {
              reject({
                message:
                  "Seller already exists",
              });

              return;
            }

            // CREATE NEW SELLER

            const newSeller = {
              id: Date.now(),

              name:
                sellerData.name ||
                "Seller",

              email:
                sellerData.email,

              password:
                sellerData.password,

              phone:
                sellerData.phone ||
                "",

              avatar:
                sellerData.avatar ||
                "",

              createdAt:
                new Date().toISOString(),
            };

            // SAVE

            saveSeller(
              newSeller
            );

            resolve({
              success: true,

              message:
                "Seller registered successfully",

              seller:
                newSeller,
            });
          } catch (error) {
            reject({
              message:
                "Registration failed",
            });
          }
        }, 1000);
      }
    );
  };

/* ==========================================
   SELLER LOGIN
========================================== */

export const sellerLogin =
  async (loginData) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          try {
            const seller =
              getSeller();

            // CHECK SELLER

            if (!seller) {
              reject({
                message:
                  "Seller not found",
              });

              return;
            }

            // EMAIL CHECK

            if (
              seller.email !==
              loginData.email
            ) {
              reject({
                message:
                  "Invalid email",
              });

              return;
            }

            // PASSWORD CHECK

            if (
              seller.password !==
              loginData.password
            ) {
              reject({
                message:
                  "Invalid password",
              });

              return;
            }

            resolve({
              success: true,

              message:
                "Login successful",

              seller,
            });
          } catch (error) {
            reject({
              message:
                "Login failed",
            });
          }
        }, 1000);
      }
    );
  };

/* ==========================================
   SELLER LOGOUT
========================================== */

export const sellerLogout =
  async () => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve({
            success: true,

            message:
              "Logout successful",
          });
        }, 500);
      }
    );
  };

/* ==========================================
   GET SELLER PROFILE
========================================== */

export const getSellerProfile =
  async () => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          const seller =
            getSeller();

          if (!seller) {
            reject({
              message:
                "Seller not found",
            });

            return;
          }

          resolve(seller);
        }, 500);
      }
    );
  };

/* ==========================================
   UPDATE SELLER PROFILE
========================================== */

export const updateSellerProfile =
  async (profileData) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          try {
            const seller =
              getSeller();

            if (!seller) {
              reject({
                message:
                  "Seller not found",
              });

              return;
            }

            const updatedSeller =
              {
                ...seller,

                ...profileData,
              };

            saveSeller(
              updatedSeller
            );

            resolve(
              updatedSeller
            );
          } catch (error) {
            reject({
              message:
                "Profile update failed",
            });
          }
        }, 1000);
      }
    );
  };

/* ==========================================
   CHANGE PASSWORD
========================================== */

export const changePassword =
  async (passwordData) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          try {
            const seller =
              getSeller();

            if (!seller) {
              reject({
                message:
                  "Seller not found",
              });

              return;
            }

            // CHECK OLD PASSWORD

            if (
              seller.password !==
              passwordData.oldPassword
            ) {
              reject({
                message:
                  "Old password incorrect",
              });

              return;
            }

            // UPDATE PASSWORD

            seller.password =
              passwordData.newPassword;

            saveSeller(
              seller
            );

            resolve({
              success: true,

              message:
                "Password changed successfully",
            });
          } catch (error) {
            reject({
              message:
                "Password change failed",
            });
          }
        }, 1000);
      }
    );
  };

/* ==========================================
   FORGOT PASSWORD
========================================== */

export const forgotPassword =
  async (emailData) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          const seller =
            getSeller();

          if (
            !seller ||
            seller.email !==
              emailData.email
          ) {
            reject({
              message:
                "Email not found",
            });

            return;
          }

          resolve({
            success: true,

            message:
              "Password reset link sent",
          });
        }, 1000);
      }
    );
  };

/* ==========================================
   RESET PASSWORD
========================================== */

export const resetPassword =
  async (
    token,
    passwordData
  ) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          try {
            const seller =
              getSeller();

            if (!seller) {
              reject({
                message:
                  "Seller not found",
              });

              return;
            }

            seller.password =
              passwordData.password;

            saveSeller(
              seller
            );

            resolve({
              success: true,

              message:
                "Password reset successful",
            });
          } catch (error) {
            reject({
              message:
                "Reset password failed",
            });
          }
        }, 1000);
      }
    );
  };

/* ==========================================
   DELETE ACCOUNT
========================================== */

export const deleteSellerAccount =
  async () => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          removeSeller();

          resolve({
            success: true,

            message:
              "Account deleted successfully",
          });
        }, 1000);
      }
    );
  };

/* ==========================================
   GET DASHBOARD
========================================== */

export const getSellerDashboard =
  async () => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve({
            totalProducts: 25,

            totalOrders: 120,

            totalSales:
              250000,

            pendingOrders: 12,
          });
        }, 500);
      }
    );
  };

/* ==========================================
   GET NOTIFICATIONS
========================================== */

export const getSellerNotifications =
  async () => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve([
            {
              _id: 1,
              title:
                "New order received",
              read: false,
            },

            {
              _id: 2,
              title:
                "Low stock alert",
              read: false,
            },
          ]);
        }, 500);
      }
    );
  };

/* ==========================================
   MARK NOTIFICATION READ
========================================== */

export const markNotificationAsRead =
  async (
    notificationId
  ) => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve({
            success: true,

            notificationId,
          });
        }, 300);
      }
    );
  };

/* ==========================================
   UPLOAD SELLER AVATAR
========================================== */

export const uploadSellerAvatar =
  async (formData) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          try {
            const seller =
              getSeller();

            if (!seller) {
              reject({
                message:
                  "Seller not found",
              });

              return;
            }

            const file =
              formData.get(
                "avatar"
              );

            seller.avatar =
              URL.createObjectURL(
                file
              );

            saveSeller(
              seller
            );

            resolve({
              success: true,

              avatar:
                seller.avatar,
            });
          } catch (error) {
            reject({
              message:
                "Avatar upload failed",
            });
          }
        }, 1000);
      }
    );
  };