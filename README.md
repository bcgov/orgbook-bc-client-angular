[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Lifecycle:Retired](https://img.shields.io/badge/Lifecycle-Retired-d45500)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# Orgbook BC Client

## Retirement Notice

**_This verison of the OrgBook BC Client has been retired and replaced by [bcgov/orgbook-bc-client](https://github.com/bcgov/orgbook-bc-client)_**

## Overview

This application implements a user interface (built with Angular) specifically for Orgbook BC, an extension of Aries VCR, for registered organizations within the Province of British Columbia.

_Note: The following sections on [Running](#running) and [Development](#development) assume that you already have a locally running instance of Aries-VCR. Please see the instructions [here](https://github.com/bcgov/aries-vcr/tree/main/docs) for running Aries-VCR locally with docker._

## Running 

Running the web application is easiest with docker. Navigate to the `docker/` folder run the following in a terminal:

``` 
./manage build
``` 

followed by

``` 
./manage start
```

## Development

Development is best done locally and requires the Angular CLI to be installed (see the installation instructions [here](https://angular.io/cli#installing-angular-cli)). With the CLI installed, navigate to the root directory of the repository and run the following in a terminal:

```
npm install && npm start
```

The application will be built and served with the Angular Dev Server, which watches for code changes and hot-reloads the application.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing

**Pull requests are always welcome!**

Please see the [Contributions Guide](CONTRIBUTING.md) for the repo.

You may also create an issue if you would like to suggest additional resources to include in this repository.

All contrbutions to this repository should adhere to our [Code of Conduct](./CODE_OF_CONDUCT).

## License

[Apache License Version 2.0](./LICENSE)