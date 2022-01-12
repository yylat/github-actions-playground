import * as fs from 'fs';

export const getProjectName = async () => {
    const packageData = await fs.promises.readFile(`${__dirname}/../package.json`, 'utf8')
    return JSON.parse(packageData)?.name
}