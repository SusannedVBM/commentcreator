import * as core from '@actions/core'
import { context } from '@actions/github'
const io = require('@actions/io')
import { GitHub } from '@actions/github'
import octokit from './octokit'




async function run() {
  try {
    const message = core.getInput('message')
    await octokit.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: message
    })

  } catch (error) {
    core.setFailed(error.message)
  }

}
run()