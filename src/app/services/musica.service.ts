import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Musica } from "../models/musica.model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn:'root'
})
export class MusicaService {
    private url = `${environment.api}/musicas`;

    constructor(private httpclient: HttpClient) {

    }
    
    obterMusicas(){
       return this.httpclient.get<Musica[]>(this.url);
    }
    cadatrarMusica(musica: Musica){
        return this.httpclient.post<Musica>(this.url,musica);
    }
    editarMusica(musica:Musica){
        return this.httpclient.put<Musica>(`${this.url}/${musica.id}`,musica);
    }
    removerMusica(id:Number){
        return this.httpclient.delete<void>(`${this.url}/${id}`);
    }
}