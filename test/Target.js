const hardhat = require("hardhat")
const { expect } = require("chai")
const { deploy_and_link } = require("../scripts/deploy.js")

describe("General tests", function () {
  it("Check math", async function () {
    const ContractInstance = await deploy_and_link()

    const result = await ContractInstance.getDivisablePowerOf2(25 * 2 ** 3 * 7)
    expect(result).eq(3)
  })

  it("Check zero math", async function () {
    const ContractInstance = await deploy_and_link()

    const result = await ContractInstance.getDivisablePowerOf2(25 * 7)
    expect(result).eq(0)
  })

  it("Check big math", async function () {
    const ContractInstance = await deploy_and_link()

    const result = await ContractInstance.getDivisablePowerOf2(2n ** 255n)
    expect(result).eq(255)
  })

  it("Check different math", async function () {
    const ContractInstance = await deploy_and_link()

    const result = await ContractInstance.getDivisablePowerOf2(3n * 2n ** 254n)
    expect(result).eq(254)
  })
})
