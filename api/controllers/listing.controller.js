import Listing from '../models/listing.model.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Mensaje al poblador no encontrado!'));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'Sólo podes ver los mensajes al poblador creados por vos!'));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Mensaje al poblador borrado!');
  } catch (error) {
    next(error);
  }
};