export default props => {
    const { test } = props
    if (test) {
        return props.children
    } else {
        return false
    }
}
