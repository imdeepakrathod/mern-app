import ErrorHandler from "../error/errors.js";
import { Reservation } from "../models/reservationSchema.js"; // Fix filename if it was a typo

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    return next(error); // In case of other errors
  }
};
