type Mods = Record<string, boolean | string>

function ClassNames(cls: string, mods: Mods, additional: string[]) {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([classNames]) => classNames)
    ].join(' ');
}

export default ClassNames;