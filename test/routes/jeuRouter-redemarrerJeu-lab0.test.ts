// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
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

describe('redemarrerJeu.test.ts', () => {
  it("devrait implémenter test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  it("devrait valider le succès de l'opération", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json")
  });
});
