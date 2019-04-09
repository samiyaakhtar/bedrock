import * as React from 'react';

class Pipeline extends React.Component {
    public render() {
        return (
            <div>
                <div>Commit in app code</div>
                <div>Build ACR image</div>
                <div>Update image tag in HLD</div>
                <div>Build K8s resource manifests</div>
            </div>
        );
    }
}

export default Pipeline;