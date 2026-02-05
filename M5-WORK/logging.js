import chalk from 'chalk';

export const logObj = (obj) => {
  Object.entries(obj).forEach(entry => {
  console.log(`${chalk.blue(entry[0])}: ${entry[1]}`);
  });
};
