Fixing common issues:

Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (node:internal/fs/watchers:207:21)

- Delete the node_modules folder and reinstall 
- run `brew install watchman`

