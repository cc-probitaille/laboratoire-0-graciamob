import { assert } from 'console';
import { jeuRoutes } from "../../src/routes/jeuRouter";
import 'jest-extended';
import supertest from 'supertest';
import app from '../../src/app';

const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

beforeAll(async () => {
  await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
  await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });
});

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  it("devrait valider le succès de l'opération", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json")
  });
  
  it("ne devrait plus avoir de joueurs", async () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  })
});
