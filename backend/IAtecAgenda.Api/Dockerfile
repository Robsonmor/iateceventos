FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["IAtecAgenda.Api/IAtecAgenda.Api.csproj", "IAtecAgenda.Api/"]
RUN dotnet restore "IAtecAgenda.Api/IAtecAgenda.Api.csproj"
COPY . .
WORKDIR "/src/IAtecAgenda.Api"
RUN dotnet build "IAtecAgenda.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "IAtecAgenda.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "IAtecAgenda.Api.dll"]
