{"credential":{"type":"simple_credentials","value":{"identity":"director","password":"d073dc4376ad2191743e"}}}

{"credential":{"type":"simple_credentials","value":{"identity":"vcap","password":"47350fcd3b3ac3dd"}}}




bosh -n deployment /var/tempest/workspaces/default/deployments/cf-8999cb8f6355c64bdf81.yml


bosh --ca-cert /var/tempest/workspaces/default/root_ca_certificate target 172.17.255.152


bosh target 172.17.255.152 director


bosh cck 自动修复cf安装问题

bosh vms 查看当前生成的虚机

bosh task recent 查看最近task

ubuntu@pivotal-ops-manager:~$ bosh 
BOSH CLI helps you manage your BOSH deployments and releases.

Usage: bosh [<options>] <command> [<args>]
    -c, --config FILE                Override configuration file. Also can be overridden by BOSH_CONFIG environment variable. Defaults to $HOME/.bosh_config. Override precedence is command-line option, then environment variable, then home directory.
        --parallel MAX               Sets the max number of parallel downloads
        --[no-]color                 Toggle colorized output
    -v, --verbose                    Show additional output
    -q, --quiet                      Suppress all output
    -n, --non-interactive            Don't ask for user input
    -N, --no-track                   Return Task ID and don't track
    -P, --poll INTERVAL              Director task polling interval
    -t, --target URL                 Override target
    -u, --user USER                  Override username
    -p, --password PASSWORD          Override password
    -d, --deployment FILE            Override deployment
    -h, --help                       here you go
        --ca-cert FILE               Override CA certificate

add blob <local_path> [<blob_dir>]
    Add a local file as BOSH blob

alias <name> <command>
    Create an alias <name> for command <command>

aliases
    Show the list of available command aliases

attach disk <job_name> <id> <disk_cid>
    Attaches an disk to an instance and replaces the current disk

backup [<path>] [--force]
    Backup BOSH
    --force         Overwrite if the backup file already exists

blobs
    Print current blobs status

cancel task <task_id>
    Cancel task once it reaches the next checkpoint

cleanup [--all]
    Cleanup releases and stemcells
    --all       Remove all unused releases and stemcells

cleanup ssh
    Cleanup SSH artifacts

cloud-config
    Download the current cloud config for the director

cloudcheck [<deployment_name>] [--auto] [--report]
    Cloud consistency check and interactive repair
    --auto            resolve problems automatically (not recommended for production)
    --report          generate report only, don't attempt to resolve problems

complete
    Command completion options

create release [<manifest_file>] [--force] [--final] [--with-tarball]
[--dry-run] [--name NAME] [--version VERSION] [--dir RELEASE_DIRECTORY]
[--timestamp-version]
    Create release (assumes current directory to be a release repository)
    --force                                         bypass git dirty state check
    --final                                         create final release
    --with-tarball                                  create release tarball
    --dry-run                                       stop before writing release manifest
    --name NAME                                     specify a custom release name
    --version VERSION                               specify a custom version number (ex: 1.0.0 or 1.0-beta.2+dev.10)
    --dir RELEASE_DIRECTORY                         path to release directory
    --timestamp-version                             create release with the timestamp as the dev version (ex: 1+dev.TIMESTAMP)

create user [<username>] [<password>]
    Create user

delete deployment <deployment_name> [--force]
    Delete deployment
    --force         ignore errors while deleting

delete disk <orphan_disk_cid>
    Deletes an orphaned disk

delete release <name> [<version>] [--force]
    Delete release (or a particular release version)
    --force         ignore errors during deletion

delete snapshot <snapshot_cid>
    Deletes a snapshot

delete snapshots
    Deletes all snapshots of a deployment

delete stemcell <name> <version> [--force]
    Delete stemcell
    --force         ignore errors while deleting the stemcell

delete user [<username>]
    Deletes the user from the director

deploy [--recreate] [--redact-diff] [--no-redact] [--skip-drain
[job1,job2]]
    Deploy according to the currently selected deployment manifest
    --recreate                                        Recreate all VMs in deployment
    --redact-diff                                     Redact manifest value changes in deployment
    --no-redact                                       do not redact
    --skip-drain [job1,job2]                          Skip drain script for either specific or all jobs

deployment [<filename>]
    Get/set current deployment

deployments
    Show the list of available deployments

diff <template>
    Diffs your current BOSH deployment configuration against the specified BOSH deployment configuration template so
    that you can keep your deployment configuration file up to date. A dev template can be found in deployments repos.

disks [--orphaned]
    List all orphaned disks in a deployment (requires --orphaned option)
    --orphaned            Return orphaned disks

download manifest <deployment_name> [<save_as>]
    Download deployment manifest locally

download public stemcell <stemcell_filename>
    Downloads a stemcell from the public blobstore

edit deployment
    Edit current deployment manifest

errands
    List available errands

export release <release> <stemcell>
    Export the compiled release to a tarball. Release should be in the form of {name}/{version} and stemcell should be
    in the form of {operating system name}/{stemcell version}

finalize release <tarball_path> [--dry-run] [--name NAME] [--version
VERSION]
    Create final release from dev release tarball (assumes current directory to be a release repository)
    --dry-run                           stop before writing release manifest
    --name NAME                         specify a custom release name
    --version VERSION                   specify a custom version number (ex: 1.0.0 or 1.0-beta.2+dev.10)

generate job <name>
    Generate job template

generate package <name>
    Generate package template

get property <name>
    Get deployment property

help [--all]
    Show help message
    --all       Show help for all BOSH commands

init release [<base>] [--git]
    Initialize release directory
    --git       initialize git repository

inspect release <release>
    List all jobs, packages, and compiled packages associated with a release. Release must be in the form
    {name}/{version}

instances [--details] [--dns] [--vitals] [--ps] [--failing]
    List all instances in a deployment
    --details           Return detailed instance information
    --dns               Return instance DNS A records
    --vitals            Return instance vitals information
    --ps                Return instance process information
    --failing           Only show failing ones

locks
    Show list of current locks

login [<username>] [<password>]
    Log in to currently targeted director. The username and password can also be set in the BOSH_USER and BOSH_PASSWORD
    environment variables.

logout
    Forget saved credentials for targeted director

logs <job> <index_or_id> [--agent] [--job] [--only filter1,filter2,...]
[--dir destination_directory] [--all]
    Fetch job or agent logs from a BOSH-managed VM
    --agent                                                 fetch agent logs
    --job                                                   fetch job logs
    --only filter1,filter2,...                              only fetch logs that satisfy given filters (defined in job spec)
    --dir destination_directory                             download directory
    --all                                                   deprecated

properties [--terse]
    List deployment properties
    --terse         easy to parse output

public stemcells [--full] [--all]
    Show the list of publicly available stemcells for download.
    --full        show the full download url
    --all         show all stemcells

recreate [<job>] [<index_or_id>] [--force] [--skip-drain]
    Recreate all jobs/job/instance (hard stop + start)
    --force                   Proceed even when there are other manifest changes
    --skip-drain              Skip running drain script

releases [--jobs]
    Show the list of available releases
    --jobs        include job templates

reset release
    Reset dev release

restart [<job>] [<index_or_id>] [--force] [--skip-drain]
    Restart all jobs/job/instance (soft stop + start)
    --force                   Proceed even when there are other manifest changes
    --skip-drain              Skip running drain script

restore <path>
    Restore BOSH director database

run errand [<errand_name>] [--download-logs] [--logs-dir
destination_directory] [--keep-alive]
    Run specified errand
    --download-logs                                                   download logs
    --logs-dir destination_directory                                  logs download directory
    --keep-alive                                                      prevent deletion/creation of vm after running errand

runtime-config
    Download the current runtime config for the director

scp [--download] [--upload] [--gateway_host HOST] [--gateway_user USER]
[--gateway_identity_file FILE] [--no_gateway]
    upload/download the source file to the given job. Note: for download /path/to/destination is a directory
    --download                                                Download file
    --upload                                                  Upload file
    --gateway_host HOST                                       Gateway host
    --gateway_user USER                                       Gateway user
    --gateway_identity_file FILE                              Gateway identity file
    --no_gateway                                              Ignore gateway provided by the director

set property <name> <value>
    Set deployment property

snapshots [<job>] [<index>]
    List all snapshots

ssh [--gateway_host HOST] [--gateway_user USER]
[--gateway_identity_file FILE] [--default_password PASSWORD]
[--strict_host_key_checking <yes/no>] [--no_gateway]
    Execute command or start an interactive session
    --gateway_host HOST                                                     Gateway host
    --gateway_user USER                                                     Gateway user
    --gateway_identity_file FILE                                            Gateway identity file
    --default_password PASSWORD                                             Use default ssh password (NOT RECOMMENDED)
    --strict_host_key_checking <yes/no>                                     Can use this flag to skip host key checking (NOT RECOMMENDED)
    --no_gateway                                                            Ignore gateway provided by the director

start [<job>] [<index_or_id>] [--force]
    Start all jobs/job/instance
    --force         Proceed even when there are other manifest changes

status [--uuid]
    Show current status (current target, user, deployment info etc)
    --uuid        Only print director UUID

stemcells
    Show the list of available stemcells

stop [<job>] [<index_or_id>] [--soft] [--hard] [--force] [--skip-drain]
    Stop all jobs/job/instance
    --soft                    Stop process only
    --hard                    Power off VM
    --force                   Proceed even when there are other manifest changes
    --skip-drain              Skip running drain script

sync blobs
    Sync blob with the blobstore

take snapshot [<job>] [<index>]
    Takes a snapshot

target [<director_url>] [<name>]
    Choose director to talk to (optionally creating an alias). If no arguments given, show currently targeted director

targets
    Show the list of available targets

task [<task_id>] [--event] [--cpi] [--debug] [--result] [--raw]
[--no-filter]
    Show task status and start tracking its output
    --event                 Track event log
    --cpi                   Track CPI log
    --debug                 Track debug log
    --result                Track result log
    --raw                   Show raw log
    --no-filter             Include all task types (ssh, logs, vms, etc)

tasks [--no-filter] [--deployment DEPLOYMENT_NAME]
    Show running tasks
    --no-filter                                               Include all task types (ssh, logs, vms, etc)
    --deployment DEPLOYMENT_NAME                              Show tasks for given deployment

tasks recent [<count>] [--no-filter] [--deployment DEPLOYMENT_NAME]
    Show <number> recent tasks
    --no-filter                                               Include all task types (ssh, logs, vms, etc)
    --deployment DEPLOYMENT_NAME                              Show tasks for given deployment

unset property <name>
    Unset deployment property

update cloud-config <cloud_config_path>
    Update the current cloud config for the director

update runtime-config <runtime_config_path>
    Update the current runtime config for the director

upload blobs
    Upload new and updated blobs to the blobstore

upload release [<release_file>] [--rebase] [--skip-if-exists] [--dir
RELEASE_DIRECTORY] [--sha1 SHA1] [--name NAME] [--version VERSION]
[--fix]
    Upload release (release_file can be a local file or a remote URI). If --name & --version are provided, they will be
    used for checking if release exists & upload will be skipped if it exists (for both local and remote)
    --rebase                                        Rebases this release onto the latest version known by director (discards local job/package
                            versions in favor of versions assigned by director)
    --skip-if-exists                                no-op; retained for backward compatibility
    --dir RELEASE_DIRECTORY                         path to release directory
    --sha1 SHA1                                     SHA1 of the remote release
    --name NAME                                     name of the release
    --version VERSION                               version of the release
    --fix                                           verify blobstore contents and replace with correct versions

upload stemcell <stemcell_location> [--skip-if-exists] [--fix] [--sha1
SHA1] [--name NAME] [--version VERSION]
    Upload stemcell (stemcell_location can be a local file or a remote URI). Note that --skip-if-exists and --fix can
    not be used together. If --name & --version are provided, they will be used for checking if stemcell exists & upload
    will be skipped if it exists (for both local and remote)
    --skip-if-exists                    skips upload if stemcell already exists
    --fix                               replaces the stemcell if already exists
    --sha1 SHA1                         SHA1 of the remote stemcell
    --name NAME                         name of the stemcell
    --version VERSION                   version of the stemcell

verify release <tarball_path>
    Verify release

verify stemcell <tarball_path>
    Verify stemcell

version
    Show version

vm resurrection [<job>] [<index_or_id>] <new_state>
    Enable/Disable resurrection for a given vm

vms [<deployment_name>] [--details] [--dns] [--vitals]
    List all VMs in a deployment
    --details           Return detailed VM information
    --dns               Return VM DNS A records
    --vitals            Return VM vitals information
ubuntu@pivotal-ops-manager:~$ 