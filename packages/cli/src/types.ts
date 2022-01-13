export interface CliOptions {
  host?: string
  help?: boolean
  site?: string
  version?: boolean
  root?: string
  configFile?: string
  debug?: boolean
}

export interface CiOptions extends CliOptions {
  budget: number
  buildStatic: boolean
}
