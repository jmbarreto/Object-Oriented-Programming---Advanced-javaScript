class Paciente {
    public pacientName : string
    public pacientCpf : number

    constructor(pacientName : string , pacientCpf : number) {
        this.pacientName = pacientName
        this.pacientCpf = pacientCpf
        
    }
}

export {Paciente}