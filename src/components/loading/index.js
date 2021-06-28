
import {Spinner, LockBody, Picture, ReleaseBody} from './styles/loading'

export default function Loading({src,...resProps}){
    return(
        <Spinner {...resProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />;
}