# Camera Hardware Requirements Checker

This project checks if a set of hardware cameras can satisfy the software camera requirements for distance and light.

## How It Works

- The requirements for distance (in meters) and light (in lux) are defined.
- Several camera sets are provided, each with their own distance and light ranges.
- The `checkHardwareRequirements` function checks if any camera in the set covers the entire required distance and light range.

## Usage

Run the script with Node.js:

```bash
node main.js
```
