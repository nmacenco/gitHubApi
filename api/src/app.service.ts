import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  private data : {
    nmacenco : {
      twitterFollowers : 10 ,
    }
  }
  constructor(private httpService : HttpService) {}
  
  getUser(params)  {
    return this.httpService
    .get(`https://api.github.com/users/${params.username}`)
    .pipe(
      map(response => response.data),
      map(data => ({
        userName : data.login,
        name : data.name, 
        githubFollowers : data.followers , 
        publicRepos : data.public_repos , 
      }))
    )
  }

  getInfo(params) {
    return this.httpService
    .get(`https://api.github.com/repos/${params.username}/gitHubApi/commits` , {
      headers : {
        Accept: "application/vnd.github.v3+json"
      }
    })
  }
}
