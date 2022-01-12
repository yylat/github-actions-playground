import { getProjectName } from "./func";

test('gets project name', async () => {
    const projectName = await getProjectName()
    expect(projectName).toEqual('github-actions-playground')
})
