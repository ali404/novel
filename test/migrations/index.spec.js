import { expect } from 'chai';
import {findPath, dfs} from '../../app/migrations'
import chai from 'chai'

const should = chai.should()

describe('Migrations', () => {
  describe('path finding mechanism', () => {
    const migrations = {
      'v011:v021': true,
    }

    it('should find a correctly given path', () => {
      const arr = findPath(migrations, '0.1.1', '0.2.1')
      arr.should.be.a('array')
      arr.should.deep.equal(['v011:v021'])
    })

    const migrations2 = {
      'v011:v021': true,
      'v021:v022': true,
      'v022:v023': true,
      'v021:v030': true,
      'v023:v030': true,
      'v030:v040': true
    }

    it('should still find correct path on a harder graph', () => {
      const path = findPath(migrations2, '0.1.1', '0.3.0')

      path.should.be.a('array')
      path.should.deep.equal(['v011:v021', 'v021:v022', 'v022:v023', 'v023:v030'])
    })

    it('should return empty array for empty graphs', () => {
      const path = findPath({}, '0.1.1', '0.2.1')
      path.should.be.a('array')
      path.should.deep.equal([])
    })

    it('should return empty array for nonexistent nodes', () => {
      const path = findPath(migrations2, '0.5.5', '0.9.9')
      path.should.be.a('array')
      path.should.deep.equal([])
    })

    it('should return empty arrays for incorrect ending node', () => {
      const path = findPath(migrations2, '0.1.1', '0.9.9')
      path.should.be.a('array')
      path.should.deep.equal([])
    })

    it('should return empty array for same start and ending node',  () => {
      const path = findPath(migrations2, '0.2.2', '0.2.2')
      path.should.be.a('array')
      path.should.deep.equal([])
    })
  })
})