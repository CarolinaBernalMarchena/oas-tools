import * as service from '../services/organisationsService.js';

export function getOrganisations(req, res) {
    service.getOrganisations(req, res);
}

export function findByregistry_number(req, res) {
    service.findByregistry_number(req, res);
}

