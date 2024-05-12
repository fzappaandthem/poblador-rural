import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    console.log('listing.updatedAt: ' + listing.updatedAt);
    const updatedAtDate = new Date(listing.updatedAt);
    console.log('updatedAtDate: ' + updatedAtDate);
    if (!listing) {
      return next(errorHandler(404, 'Mensaje al poblador no encontrado!'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getEnabledMPRsWhoGotThisEmmission = async(req, res, next) => {
  //si encuentra un MPR que tiene como fecha de fin menor que la actual, set isEnabled = false
  try {
    //______

    const emision = req.query.emision;
    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';

    const listings = await Listing.find({
      [emision] : true,
      isEnabled : true
    }).sort({[sort]: order});

    return res.status(200).json(listings);


  } catch (error) {
    next(error);
  }
}

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, 'Mensaje al poblador no encontrado!'));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'Sólo podés editar los mensajes al poblador creados por vos!'));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
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